import type { RootState, AppDispatch } from "@/store/store"

export type { RootState, AppDispatch }

export interface AsyncThunkConfig {
  state: RootState
  dispatch: AppDispatch
  extra?: unknown
  rejectValue?: unknown
}

