import mongoose from 'mongoose'
const SCHEME_MODEL = 'schemes'
interface IScheme {
    title: string
    slug: string
    provider: string,
    description: string,
    detailedDescription: string,
    about: string,
    benefits: string,
    url: string,
    maxAge: number,
    minAge: number,
    income: number,
    application: string[],
    categories: string[],
    eligibility: string[],
    featured:boolean
    visibility:boolean
}
const SchemeSchema = new mongoose.Schema<IScheme>(
    {
        title: {
            type: String,
            required: true,
            message: "Title is required",
            unique: true
        },
        slug: {
            type: String,
            required: true,
            message: 'Slug is required',
            unique: true
        },
        provider: String,
        description: String,
        detailedDescription: String,
        about: String,
        benefits: String,
        url: String,
        maxAge: Number,
        minAge: Number,
        income: Number,
        application: [String],
        categories: [String],
        eligibility: [String],
        featured: {
            type: Boolean,
            default: false
        },
        visibility: {
            type: Boolean,
            default: false
        }
    }
)

// SchemeSchema.path('title').validate(async function(value){
//     const count:number = await this.model(SCHEME_MODEL).countDocuments({title:value})
//     return !count
// },'title already exists')

// SchemeSchema.path('slug').validate(async function(value){
//     const count:number = await this.model(SCHEME_MODEL).countDocuments({slug:value})
//     return !count
// },'slug already exists')




SchemeSchema.index({ title: 'text', description: 'text' })
const Schemes = mongoose.model(SCHEME_MODEL, SchemeSchema)
export { Schemes }