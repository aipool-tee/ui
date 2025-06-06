import { useEffect, useMemo, memo } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import useFetchPoolById from '@/hooks/pool/useFetchPoolById'
import useFetchMultipleRpcClmmInfo from '@/hooks/pool/clmm/useFetchMultipleRpcClmmInfo'
import Button from '@/components/Button'
import { ClmmDataWithUpdateFn } from '@/hooks/portfolio/useAllPositionInfo'
import { colors } from '@/theme/cssVariables'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ClmmPositionItemsCard } from './components/Clmm/ClmmPositionItemsCard'
import { openCache } from './components/Clmm/ClmmPositionAccountItem'
import { ApiV3PoolInfoConcentratedItem } from 'bifido-sdk'
import { ClmmLockInfo } from '@/hooks/portfolio/clmm/useClmmBalance'

const ClmmMyPositionTabContent = memo(
  ({
    isLoading,
    clmmBalanceInfo,
    lockInfo,
    refreshTag,
    setNoRewardClmmPos
  }: {
    isLoading: boolean
    refreshTag: number
    clmmBalanceInfo: ClmmDataWithUpdateFn
    lockInfo: ClmmLockInfo
    setNoRewardClmmPos: (val: string, isDelete?: boolean) => void
  }) => {
    const { t } = useTranslation()
    const { formattedDataMap } = useFetchPoolById<ApiV3PoolInfoConcentratedItem>({
      idList: Array.from(clmmBalanceInfo.keys()),
      refreshTag,
      keepPreviousData: true
    })
    const allPositions = useMemo(() => {
      const data = Array.from(clmmBalanceInfo.entries())
      data.forEach((pos) => {
        const noneZeroPos = pos[1].filter((p) => !p.liquidity.isZero())
        const zeroPos = pos[1].filter((p) => p.liquidity.isZero())
        pos[1] = [...noneZeroPos.sort((a, b) => a.tickLower - b.tickLower), ...zeroPos.sort((a, b) => a.tickLower - b.tickLower)]
      })
      data.sort((a, b) => (formattedDataMap[b[0]]?.tvl || 0) - (formattedDataMap[a[0]]?.tvl || 0))
      return data
    }, [clmmBalanceInfo, formattedDataMap])

    const {
      dataMap,
      slot: poolSlot,
      mutate
    } = useFetchMultipleRpcClmmInfo({
      idList: Array.from(clmmBalanceInfo.keys()),
      refreshTag
    })

    const balance = Array.from(clmmBalanceInfo.values())[0]?.[0] || {}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const positionSlot = Math.max(balance.slot ?? 0, balance.tickSlot ?? 0)

    useEffect(() => {
      if (poolSlot >= positionSlot || poolSlot === 0) return
      const timerId = window.setTimeout(() => {
        mutate()
      }, 500)

      return () => {
        clearTimeout(timerId)
      }
    }, [poolSlot, positionSlot, mutate])

    useEffect(() => {
      return () => openCache.clear()
    }, [])

    return (
      <Box display="flex" flexDir="column" gap={4}>
        {allPositions.length ? (
          allPositions.map((data) => (
            <ClmmPositionItemsCard
              key={data[0]}
              isLoading={isLoading}
              poolId={data[0]}
              positions={data[1]}
              poolInfo={formattedDataMap[data[0]]}
              lockInfo={lockInfo[data[0]]}
              initRpcPoolData={
                dataMap[data[0]]
                  ? {
                      poolId: data[0],
                      currentPrice: dataMap[data[0]].currentPrice.toNumber(),
                      poolInfo: dataMap[data[0]]
                    }
                  : undefined
              }
              setNoRewardClmmPos={setNoRewardClmmPos}
            />
          ))
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            minH="200px"
            flexDir="column"
            py={5}
            px={8}
            bg={colors.backgroundLight}
            gap={6}
            borderRadius="xl"
          >
            <Text variant="title" fontSize="sm">
              {t('clmm.no_clmm_positions')}
            </Text>
            <Link href="/liquidity-pools">
              <Button>{t('common.go_to_pools')}</Button>
            </Link>
          </Flex>
        )}
      </Box>
    )
  }
)

export { ClmmMyPositionTabContent }
