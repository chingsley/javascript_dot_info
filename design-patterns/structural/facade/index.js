import { PostServiceFacade } from "./postServiceFacade";

const postServiceFacade = new PostServiceFacade();

const run = async () => {
  console.log("hre....");
  const res1 = await postServiceFacade.getPosts();
  const res2 = await postServiceFacade.getPostsById(2);
  const res3 = await postServiceFacade.getIndividualPostComments(2);
  console.log("res = ", res3);
};

run();
