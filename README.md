Blog post(In Bangla):

2.What is the use of the keyof keyword in TypeScript? Provide an example.
Answer: 
TypeScript-এ keyof একটি শক্তিশালী keyword, যা কোনো object type-এর সব property name গুলোকে একসাথে একটি union type হিসেবে প্রকাশ করে। এটি আমাদের object-এর key গুলোকে type হিসেবে ব্যবহার করার সুযোগ দেয়।

একটি user object:
type User = {
  id: number;
  name: string;
  email: string;
};
type UserKeys = keyof User;

তাহলে UserKeys টাইপটি হবে:
"id" | "name" | "email"
এর মানে, UserKeys টাইপের কোনো ভেরিয়েবল এই তিনটি string ছাড়া অন্য কিছু গ্রহণ করবে না।

keyof গুরুত্বপূর্ণ কারণ:
1.ভুল property নাম ব্যবহার করা থেকে রক্ষা করে
2.Code-কে type-safe করে
3.Generic function লেখার সময় ব্যাপকভাবে ব্যবহার করা হয়


4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

TypeScript-এ enum ব্যবহার করা হয় যখন আমাদের কাছে একটি নির্দিষ্ট এবং সীমাবদ্ধ value-এর সেট থাকে, যেগুলো বারবার ব্যবহার করতে হয়। এটি code-কে আরও readable এবং structured করে তোলে।

Numeric Enum উদাহরণ:
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
Numeric enum সাধারণত তখন ব্যবহার করা হয়, যখন value-এর numeric representation যথেষ্ট।

String Enum উদাহরণ:
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
let role: UserRole = UserRole.Admin;

Enum ব্যবহারের সুবিধা
1.নির্দিষ্ট value সেট নিশ্চিত করে
2.Typo বা ভুল string ব্যবহারের ঝুঁকি কমায়
3.Code maintain করা সহজ করে