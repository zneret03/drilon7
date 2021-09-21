export type SEOTypes = {
    title : string,
    content : string,
}

export type dataTypes = {
    data : {
        projects : Array<Object>;
        loading : boolean
    }
}

export type JobTypes = {
    jobs : {
        id: number,
        title : string,
        imageSource: string,
        source: string,
        description: string,
        startDate: string,
        endDate : string
    }[]
}