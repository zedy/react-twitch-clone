import { mapNewStreamsList } from '../../utils/streams';

export const CreateStream = response => {
  return {
      type: 'STREAM_CREATE',
      payload: response
  }
}

export const FetchStream = response => {
  return {
      type: 'STREAM_FETCH',
      payload: response
  }
}

export const FetchAllStreams = response => {
  return {
      type: 'STREAM_FETCH_ALL',
      payload: mapNewStreamsList(response.data)
  }
}

export const DeleteStream = response => {
  return {
      type: 'STREAM_DELETE',
      payload: response
  }
}

export const EditStream = response => {
  return {
      type: 'STREAM_EDIT',
      payload: response
  }
}