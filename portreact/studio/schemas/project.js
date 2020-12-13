export default {
    name: "project",
    title: "Project",
    type: 'document',
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name:"date",
            tyoe: "datetime",
        },{
            name: "place",
            type: "string"
        },
        { 
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: { //dropdown menu
                list:[
                    {value: "personal", title:"Personal"},
                    {value: "client", title:"Client"},
                    {value: "bootcamp", title:"Bootcamp"},
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array"
        }
    ]
}