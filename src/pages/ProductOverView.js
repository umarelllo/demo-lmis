import React, {useContext} from "react"
import {Context} from "../context/context"
import {useGetProductByIdQuery} from "../redux/products/products.api"
import {Loader} from "../components/loader/Loader"

export function ProductOverView() {
    const {id} = useContext(Context)

    const {data:error, isLoading } = useGetProductByIdQuery(id)

    return (
        <div className='container max-w-[1240px] mx-auto mt-[70px] flex-auto'>
            { error && <p className='text-center pt-4'>{error.error}</p> }
            { isLoading && <Loader/> }
        </div>
    )
}
