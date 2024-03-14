export function load({params}){
    const clientid = params.slug;
    if(clientid){
        return {clientid: clientid}
    }
}