import { ApiV3Token } from 'bifido-sdk'

export type NewRewardInfo = {
  id: string
  token?: ApiV3Token
  amount?: string
  farmStart?: number
  farmEnd?: number
  perWeek?: string
  error?: string
  isValid: boolean
}
