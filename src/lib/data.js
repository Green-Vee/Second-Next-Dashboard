import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

// Getting all the posts
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;

  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

// Getting a single post
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    // console.log(post)
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
    
  }
};

// export const getUser = async (id) => {
export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    if (user) {
      // console.log(user)
      return user;
    } else {
      console.log('No user found')
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
