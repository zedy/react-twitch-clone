import { createSelector } from "reselect";

const selectStreams = state => state.streams;

export const selectAllStreams = createSelector(
    [selectStreams],
    streams => Object.values(streams.list)
)

export const selectStream = id => (
  createSelector(
    [selectStreams],
    streams => streams.list[id]
  )
)