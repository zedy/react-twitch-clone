import streams from "../apis/streams";

export const createStreamUtil = (userId, formValues) => {
  return streams.post('/streams', );
}

export const fetchStreamsUtil = () => {
  return streams.get('/streams');
}

export const fetchStreamUtil = id => {
  return streams.get(`/streams/${id}`);
}

export const deleteStreamUtil = id => {
  return streams.delete(`/streams/${id}`);
}

export const editStreamUtil = (id, formValues, userId) => {
  return streams.put(`/streams/${id}`, { ...formValues, userId});
}

export const mapNewStreamsList = streams => {
  const obj = streams.reduce(function(result, item, index, array) {
    result[item.id] = item; //a, b, c
    return result;
  }, {}) 

  return obj;
}