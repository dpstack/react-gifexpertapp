import { getGifts } from '../helpers/getGifs';
import { useEffect, useState } from "react";

export default function UseFetchGifs(category) {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]);

    return state;

}