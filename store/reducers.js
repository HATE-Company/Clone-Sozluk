import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    commentList: [
        {
            "id": 'IKIGhUYWpebuhCFjlgtmO',
            "name": "Emre KARADAĞ",
            "desc": "Test Comment",
            "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
            "vote": 42,
            "parentId": '0',
            "articleId": '1',
            "children": [
                {
                    "id": 'WsU7KGfDGlwfjPtEjq_W_',
                    "name": "Mahmut TUNCER",
                    "desc": "Toprağa düşen son halay tanesi",
                    "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
                    "vote": 3,
                    "parentId": 'IKIGhUYWpebuhCFjlgtmO',
                    "children": [],
                },
                {
                    "id": 'zJNLmLOYjQxuh48smR1Gu',
                    "name": "Burcu ERDOĞAN",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
                    "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
                    "vote": 0,
                    "parentId": 'IKIGhUYWpebuhCFjlgtmO',
                    "children": [
                        {
                            "id": 'wcUGvSv3oqMQOcV66F4cG',
                            "name": "İsmail TÜRÜT",
                            "desc": "Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
                            "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
                            "vote": 22,
                            "parentId": 'zJNLmLOYjQxuh48smR1Gu',
                            "children": [],
                        },
                    ]
                },
            ]
        },
        {
            "id": 'eYjrKHdJvkkKJCzmjOpGR',
            "name": "İbrahim TATLISES",
            "desc": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.",
            "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
            "vote": 925,
            "articleId": '1',
            "parentId": '0',
            "children": [],
        },
        {
            "id": 'eYjrKHdJvkkKJCzmjOpGxR',
            "name": "Acun ILICALI",
            "desc": "Param var alıyorum kardeşim",
            "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
            "vote": 29832,
            "articleId": '2',
            "parentId": '0',
            "children": [],
        },
        {
            "id": 'eYjrKHdJvkkKJCzmjOpGxR',
            "name": "John DOE",
            "desc": "Ben aslında gerçek bir insanım",
            "date": "Sun Jan 11 2023 10:00:00 GMT+0300 (GMT+03:00)",
            "vote": 1,
            "articleId": '3',
            "parentId": '0',
            "children": [],
        }
    ]
}

const nestedRecursive = (commentlist = initialState.commentList, ids, type, pushData = {}) => {
    for (let index = 0; index < commentlist.length; index++) {

        if (type === "vote")
            if (commentlist[index].id == ids) commentlist[index].vote += 1;

        if (type === "pushComment") {
            if (commentlist[index].id == ids) {
                commentlist[index].children.push({
                    "id": nanoid(),
                    "name": pushData.name,
                    "desc": pushData.desc,
                    "articleId": pushData.articleId,
                    "date": Date(),
                    "vote": 0,
                    "parentId": pushData.parentId,
                    "children": []
                })
            }
        }

        if (commentlist[index].children)
            nestedRecursive(commentlist[index].children, ids, type, pushData)
    }
    return commentlist
};


const states = createSlice({
    name: 'states',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.commentList.push({
                "id": nanoid(),
                "name": action.payload.name,
                "desc": action.payload.desc,
                "articleId": action.payload.articleId,
                "date": Date(),
                "vote": 0,
                "parentId": '0',
                "children": []
            })
        },
        addReplyComment: (state, action) => {
            state.commentList = nestedRecursive(state.commentList, action.payload.parentId, "pushComment", action.payload)
        },
        setLike: (state, action) => {
            state.commentList = nestedRecursive(state.commentList, action.payload, "vote")
        },
    }
})

export const { addComment, addReplyComment, setLike } = states.actions

export default states.reducer