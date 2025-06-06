import { RAYMint } from 'bifido-sdk'
import { Flex, Text, Link, Button, Skeleton } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import StandardPoolRowItem from './components/Standard/StandardPoolRowItem'
import { FormattedFarmInfoV6 } from '@/hooks/farm/type'
import { FarmPositionInfo, EMPTY_FARM_POS } from '@/hooks/portfolio/farm/useFarmPositions'
import useFetchAccLpMint from '@/hooks/token/useFetchAccLpMint'
import useFetchPoolByLpMint from '@/hooks/pool/useFetchPoolByLpMint'
import { colors } from '@/theme/cssVariables'
import { FarmBalanceInfo } from '@/hooks/farm/type'
import useLockCpmmBalance from '@/hooks/portfolio/cpmm/useLockCpmmBalance'
import { useMemo } from 'react'
import { formatPoolData } from '@/hooks/pool/formatter'
import { FormattedPoolInfoStandardItem } from '@/hooks/pool/type'

const emptyPosition = {
  hasAmount: true,
  hasV1Data: false,
  lpMint: '',
  totalLpAmount: '0',
  totalV1LpAmount: '0',
  vault: '',
  data: []
}

export default function MyPositionTabStandard({
  lpBasedData,
  allFarmBalances,
  refreshTag,
  stakedFarmMap,
  isLoading
}: {
  isLoading: boolean
  allFarmBalances: FarmBalanceInfo[]
  refreshTag: number
  lpBasedData: Map<string, FarmPositionInfo>
  stakedFarmMap: Map<string, FormattedFarmInfoV6>
}) {
  const { t } = useTranslation()
  const { noneZeroLpMintList } = useFetchAccLpMint({})
  const { cpmmLockBalanceInfo } = useLockCpmmBalance({})
  const farmPositionList = Array.from(lpBasedData.entries()).filter(
    ([lpMint, position]) => position.hasAmount && lpMint !== RAYMint.toString()
  )
  const lpOnlyList = noneZeroLpMintList.filter(
    (d) => !(lpBasedData.has(d!.address.toString()) && lpBasedData.get(d!.address.toString())?.hasAmount)
  )

  const { formattedData, isLoading: isPoolLoading } = useFetchPoolByLpMint({
    lpMintList: farmPositionList.map((f) => f[0]).concat(lpOnlyList.map((p) => p.address.toBase58())),
    refreshTag,
    keepPreviousData: true
  })

  const allLockLp = useMemo(() => {
    const data = new Map(Array.from(cpmmLockBalanceInfo))
    farmPositionList.forEach((f) => data.delete(f[0]))
    lpOnlyList.forEach((l) => data.delete(l.address.toBase58()))
    return Array.from(data)
  }, [farmPositionList, lpOnlyList])

  const allPoolData = [...(formattedData || []), ...allLockLp.map((d) => formatPoolData(d[1][0].poolInfo) as FormattedPoolInfoStandardItem)]

  const hasData = farmPositionList.length > 0 || lpOnlyList.length > 0 || allLockLp.length > 0
  const allData = [
    ...farmPositionList,
    ...lpOnlyList,
    ...Array.from(allLockLp).map((d) => [d[0], EMPTY_FARM_POS] as [string, FarmPositionInfo])
  ]
  allData.sort((a, b) => {
    const poolA = allPoolData?.find((p) => p.lpMint.address === (Array.isArray(a) ? a[0] : a.address.toBase58()))
    const poolB = allPoolData?.find((p) => p.lpMint.address === (Array.isArray(b) ? b[0] : b.address.toBase58()))
    return (poolB?.tvl || 0) - (poolA?.tvl || 0)
  })

  return (
    <Flex direction="column" gap={4}>
      {allData.map((data) =>
        Array.isArray(data) ? (
          <StandardPoolRowItem
            key={`user-position-pool-${data[0]}`}
            isLoading={isPoolLoading}
            allFarmBalances={allFarmBalances}
            stakedFarmMap={stakedFarmMap}
            position={data[1]}
            pool={allPoolData?.find((p) => p.lpMint.address === data[0])}
            lockInfo={cpmmLockBalanceInfo.get(data[0]) ?? []}
          />
        ) : (
          <StandardPoolRowItem
            key={`user-position-pool-${data!.address.toBase58()}`}
            isLoading={isPoolLoading}
            allFarmBalances={allFarmBalances}
            stakedFarmMap={stakedFarmMap}
            pool={allPoolData?.find((p) => p.lpMint.address === data!.address.toBase58())}
            lockInfo={cpmmLockBalanceInfo.get(data!.address.toBase58()) ?? []}
            position={emptyPosition}
          />
        )
      )}
      {isLoading ? (
        <Skeleton w="full" height="140px" rounded="lg" />
      ) : !hasData ? (
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
            {t('portfolio.no_standard_positions')}
          </Text>
          <Link href="/liquidity-pools">
            <Button>{t('common.go_to_pools')}</Button>
          </Link>
        </Flex>
      ) : null}
    </Flex>
  )
}
