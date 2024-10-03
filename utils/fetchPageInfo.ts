// import { PageInfo } from "../typings";

// export const fetchPageInfo = async () => {
//   // const temp = 'http://localhost:3000/api/pageInfo';
//   const temp = `${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`;
//   const res = await fetch(temp);
//   const data = await res.json();
//   const pageInfo: PageInfo = data.pageInfo;
//   // console.log("fetching", pageInfo);
//   return pageInfo;
// };

import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    // Try parsing the response as JSON
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
};
