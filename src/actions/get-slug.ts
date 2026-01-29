import { FieldSlugApi } from "@/api/fieldSlug.api"


export const getByFieldSlug = async (slug: string) => {

  const {data} = await FieldSlugApi.get(`/${slug}`)

  return data
}