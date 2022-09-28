import {
    q1Img1,
    q1Img2,
    q5img1,
    q5img2
} from '../assets/index'

export const advices = [{
        scores: 1,
        advice: 'Outstanding',
        subAdvice: 'You are one of the top performer on this quiz'
    },

    {
        scores: 2,
        advice: 'Excellent',
        subAdvice: 'This score is better than 80% people we got, you did amazing'
    },

    {
        scores: 3,
        advice: 'Good',
        subAdvice: 'This score is one of the good ones we got so far, You’ll pass with this score.'
    },

    {
        scores: 4,
        advice: 'Need Improvement',
        subAdvice: 'You are good, but you can do much better we know that, you can try again.'
    },
    {
        scores: 5,
        advice: 'Try Again',
        subAdvice: 'This is better than 50%, but not enough, we know you can do much better, try again.'
    },
    {
        scores: 6,
        advice: 'Opps!! Try Again',
        subAdvice: 'Not enough, you can do much better we know that, please try again.'
    }
]


export const questions = [{
        "_id": "6315aabd211e6162b8431277",
        "time_limit": 120,
        "attempts_allowed": 3,
        "course_id": "qwerty",
        "questionNumber": 1,
        "section_id": "qwerty",
        "questions": [{
            "_id": "6315a9d0211e6162b8431271",
            "question_type": "image",
            "answer_type": "image",
            "body": "Choose hello it the image with proper design rules.",
            "answers": [{
                    "answer": q1Img1,
                    "is_correct": true,
                    "_id": "6315a9d0211e6162b8431261"
                },
                {
                    "answer": q1Img2,
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431262"
                }
            ],
            "section_id": "qwerty",
            "createdAt": "2022-09-05T07:48:32.964Z",
            "__v": 0
        }],
        "__v": 0
    },


    {
        "_id": "6315aabd211e6162b8431278",
        "time_limit": 120,
        "attempts_allowed": 3,
        "course_id": "qwerty",
        "questionNumber": 2,
        "section_id": "qwerty",
        "questions": [{
            "_id": "6315a9d0211e6162b8431272",
            "question_type": "text",
            "answer_type": "text",
            "body": "Which is NOT a benefit of using wireframes?",
            "answers": [{
                    "answer": "They take longer to create.",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431272"
                },
                {
                    "answer": "They take up more space on the storage medium.",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431273"
                },
                {
                    "answer": "They take up more space on the normal medium.",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431274"
                },
                {
                    "answer": "They can be difficult to understand because they are “stick figures.”",
                    "is_correct": true,
                    "_id": "6315a9d0211e6162b8431275"
                }
            ],
            "section_id": "qwerty",
            "createdAt": "2022-09-05T07:48:32.964Z",
            "__v": 0
        }],
        "__v": 0
    },



    {
        "_id": "6315aabd211e6162b8431278",
        "time_limit": 120,
        "attempts_allowed": 3,
        "course_id": "qwerty",
        "questionNumber": 3,
        "section_id": "qwerty",
        "questions": [{
            "_id": "6315a9d0211e6162b8431273",
            "question_type": "image",
            "answer_type": "image",
            "body": "Choose the image with proper design rules.",
            "answers": [{
                    "answer": q1Img1,
                    "is_correct": true,
                    "_id": "6315a9d0211e6162b8431265"
                },
                {
                    "answer": q1Img2,
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431266"
                }
            ],
            "section_id": "qwerty",
            "createdAt": "2022-09-05T07:48:32.964Z",
            "__v": 0
        }],
        "__v": 0
    },

    {
        "_id": "6315aabd211e6162b8431279",
        "time_limit": 120,
        "attempts_allowed": 3,
        "course_id": "qwerty",
        "questionNumber": 4,
        "section_id": "qwerty",
        "questions": [{
            "_id": "6315a9d0211e6162b8431274",
            "question_type": "text",
            "answer_type": "text",
            "body": "Which of the following is not a design principle that allow the user to maintain control?",
            "answers": [{
                    "answer": "Provide for flexible interaction.",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431282"
                },
                {
                    "answer": "Allow user interaction to be interrupt-able and undo-able.",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431283"
                },
                {
                    "answer": "Show technical internals from the casual user.",
                    "is_correct": true,
                    "_id": "6315a9d0211e6162b8431284"
                },
                {
                    "answer": "Design for direct interaction with objects that appear on the screen.”",
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431285"
                }
            ],
            "section_id": "qwerty",
            "createdAt": "2022-09-05T07:48:32.964Z",
            "__v": 0
        }],
        "__v": 0
    },



    {
        "_id": "6315aabd211e6162b8431281",
        "time_limit": 120,
        "attempts_allowed": 3,
        "questionNumber": 5,
        "course_id": "qwerty",
        "section_id": "qwerty",
        "questions": [{
            "_id": "6315a9d0211e6162b8431277",
            "question_type": "code",
            "answer_type": "code",
            "body": "Which code is will save memory?",
            "answers": [{
                    "answer": q5img1,
                    "is_correct": false,
                    "_id": "6315a9d0211e6162b8431292"
                },
                {
                    "answer": q5img2,
                    "is_correct": true,
                    "_id": "6315a9d0211e6162b8431295"
                }
            ],
            "section_id": "qwerty",
            "createdAt": "2022-09-05T07:48:32.964Z",
            "__v": 0
        }],
        "__v": 0
    },


]