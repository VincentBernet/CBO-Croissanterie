
// Future interface for the productJson returned by the API
export interface memberType {
    member_name: string;
    member_age: number;
}

// Future interface for the productJson returned by the API
export interface memberListType {
    members: memberType[];
}

export interface timeBeforeNextDeletionType {
    timeBeforeNextDeletion: string;
}




export const retrieveProductInformation = async (
    codeBar: number,
): Promise<listMemberType> => {
    let json: listMemberType = { product_id: codeBar, firstCatego: '' };
    try {
        const endpointUrl = `https://ucare-backend.herokuapp.com/products/${codeBar}.json`;
        /*
            console.log(
                'Console Log before calling Ucare Product API at : ' + endpointUrl
            ); */
        await fetch(endpointUrl).then((response) => response
            .json()
            .then((data) => ({
                data,
                status: response.status,
            }))
            .then((res) => {
                json = res.data;
            }));
    } catch (error) {
        console.log(`We got some error with the api call chef: ${error}`);
        console.error(error);
    }
    return json;
};
