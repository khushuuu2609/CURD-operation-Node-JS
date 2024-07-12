import yup from "yup";


const bookValidationSchema = yup.object().shape({
    author :yup.string()
    .required("Author is required")
    .typeError("Author name must be valid string"),

    title:yup.string()
    .required("Title is required")
    .typeError("Title name must be valid string"),

    year:yup.number()
    .required("Year is required")
    .test("length","please enter a valid year",
        (val) => val.toString().length === 4)
    .typeError("year must be a valid number"),

    id:yup.number(),
    type:yup.array()
    .min(1,"Book must belong to at least one type")
    .required("Type is required.")
    .of(yup.string().oneof(["Adventure","Horror","Comic","Nonfiction","Invalid book type"])
    )
    .typeError("Invalid type of book"),

    readingStatus: yup.boolean()
    .required("Reading status is required.")
    .typeError("Reading status must be a true or false"),
})
.noUnknown(true,(value) => {
    return `No extra properties allowed in book, found: ${value.unknown}`;
})
.strict();

module.exports = {bookValidationSchema};