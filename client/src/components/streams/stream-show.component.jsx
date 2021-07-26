import React, { useEffect, useState } from 'react';
import { fetchStreamUtil } from '../../utils/streams';

const StreamShow = ({ match }) => {
    const [stream, setStream] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetchStreamUtil(match.params.id);

            setStream(response.data);
        })();      
    }, [])

    if (!stream) {
        return <div>Loading ...</div>
    }

    return (
        <div>{ stream.title }</div>
    )
};

export default StreamShow;