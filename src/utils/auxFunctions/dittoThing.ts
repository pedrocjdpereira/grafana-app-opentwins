import { AppPluginMeta, KeyValue } from "@grafana/data"
import { IDittoThing } from "../interfaces/dittoThing"

export const getNameFromDittoThing = (name:string) => {
    const i = name.indexOf(":")
    if(i+1<name.length){
        return name.substring(i+1)
    } else {
        return "unnamed"
    }
}

export const getSelectFromDittoThingArray = (data:IDittoThing[]) => {
    return data.map((item:IDittoThing) => {
        return {
                label : getNameFromDittoThing(item.thingId),
                value : item.thingId,
                text : JSON.stringify(item, undefined, 4)
            }
    })
}

export const getSelectWithObjectsFromDittoThingArray = (data:IDittoThing[]) => {
    return data.map((item:IDittoThing) => {
        return {
                label : getNameFromDittoThing(item.thingId),
                value : item
            }
    })
}

export const getSelectWithObjectsFromThingsArray = (data:IDittoThing[]) => {
    return data.map((item:IDittoThing) => {
        return {
                label : item.thingId,
                value : item
            }
    })
}

export const JSONtoIAttributes = (data:any) => {
    return (Object.keys(data) as string[]).map((key) => (
        {key: key, value:data[key]}
    ))
}

export const JSONtoIFeatures = (data:any) => {
    return (Object.keys(data) as string[]).map((key) => (
        {name: key, properties: data[key].properties}
    ))
}

export const fromMetaToValues = (meta:AppPluginMeta<KeyValue<any>>) => {
    var res:any = {}
    if(meta.jsonData !== undefined){
        const data = meta.jsonData
        if(data.ditto_endpoint !== undefined) res['ditto_endpoint'] = data.ditto_endpoint
        if(data.ditto_username !== undefined) res['ditto_username'] = data.ditto_username
        if(data.ditto_password !== undefined) res['ditto_password'] = data.ditto_password
        if(data.ditto_username_devops !== undefined) res['ditto_username_devops'] = data.ditto_username_devops
        if(data.ditto_password_devops !== undefined) res['ditto_password_devops'] = data.ditto_password_devops
        if(data.ditto_extended_endpoint !== undefined) res['ditto_extended_endpoint'] = data.ditto_extended_endpoint
        if(data.hono_endpoint !== undefined) res['hono_endpoint'] = data.hono_endpoint + "/v1"
        if(data.hono_tenant !== undefined) res['hono_tenant'] = data.hono_tenant
    }
    return res
}