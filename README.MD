#for Resistration
localhost:3000/registration
Post
{
"Name":"rest",
"Email":"emaijl@gmail.com",
"Password":123456
}

#For Login
localhost:3000/login
Post

{
"Email":"email@gmail.com",
"Password":123456
}

#Create Post
localhost:3000/createPost

{ "Title":"kk",
"Body":"body",
"Active":true,
"Geo_location" :{
"latitude":"1",
"longitude":2
}
}

#Get Active Inactive Post
localhost:3000/getActive

#Get Post
localhost:3000/getPost

#Update Post
localhost:3000/update/659954e5d3bd277248b81702
Put
{ "Title":"",
"Body":"hh",
"Active":true,
"Geo_location" :{
"latitude":1,
"longitude":6
}
}

Bearer Token Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjU5OTU1NGJkM2JkMjc3MjQ4YjgxNzA2IiwiTmFtZSI6InJlc3QiLCJFbWFpbCI6ImVtYWlqbEBnbWFpbC5jb20iLCJQYXNzd29yZCI6MTIzNDU2LCJfX3YiOjB9LCJpYXQiOjE3MDQ1NDc2NzJ9.B_ev_6dMjqAHg2XiYjCk05MV0T7kv3q3115V37VYW5I

#Delete Post
localhost:3000/delete/659954e5d3bd277248b81702
Delete

Bearer Token Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRXhpc3QiOnsiX2lkIjoiNjU5OTU1NGJkM2JkMjc3MjQ4YjgxNzA2IiwiTmFtZSI6InJlc3QiLCJFbWFpbCI6ImVtYWlqbEBnbWFpbC5jb20iLCJQYXNzd29yZCI6MTIzNDU2LCJfX3YiOjB9LCJpYXQiOjE3MDQ1NDc2NzJ9.B_ev_6dMjqAHg2XiYjCk05MV0T7kv3q3115V37VYW5I

**\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***Give me Proper Feedback****\*\*****\*\*****\*\*****\_\_****\*\*****\*\*****\*\*****

Some Points -

We can also use Bcrypt to Encrypt Password.
