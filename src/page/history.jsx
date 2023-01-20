import React from "react";
import List from "../components/common/List";
import { useLoaderData } from "react-router-dom";
import { clsx } from "clsx";
import Avatar from "../components/user/Avatar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/slice/authSlice";
function History() {
  const history = useLoaderData();
  console.log(history);
  const user = useSelector(selectCurrentUser);
  const isWon = (winnerId) => {
    return user._id == winnerId;
  };
  const Battle = ({ data }) => (
    <div
      className={clsx(
        " w-full  bg-gray-900/50 inline-flex items-center justify-around  py-1 px-6 rounded-xl"
      )}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <Avatar size={"xs"} url={data.idOpponents[0].avatar} />
          <span className=" text-sm font-medium">
            {data.idOpponents[0].username}
          </span>
        </div>
        <span>VS</span>
        <div className="flex flex-col items-center">
          <Avatar size={"xs"} url={data.idOpponents[1].avatar} />
          <span className=" text-sm font-medium">
            {data.idOpponents[1].username}
          </span>
        </div>
      </div>
      <div>
        <span>{isWon(data.winner._id) ? "Win" : "Loose"}</span>
      </div>
    </div>
  );
  return (
    <div>
      <h2 className="text-center text-xl font-semibold my-4">History</h2>
      <div className="max-w-2xl mx-auto">
        {history.length > 0 ? (
          <List
            type="column"
            list={history}
            gap={1}
            renderItem={(data) => <Battle data={data} />}
          ></List>
        ) : (
          <p className="h-36 w-full  bg-gray-900/50 inline-flex items-center justify-center  gap-2 p-2 font-medium text-lg">
            <svg
              version="1.1"
              id="Uploaded to svgrepo.com"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              className="h-12 w-12 text-indigo-500"
            >
              <path
                fill="currentColor"
                d="M28.414,24l-3-3l2.293-2.293l-1.414-1.414l-2.236,2.236l-3.588-4.186L25,11.46V6h-5.46L16,10.13
	L12.46,6H7v5.46l4.531,3.884l-3.588,4.186l-2.236-2.236l-1.414,1.414L6.586,21l-3,3L7,27.414l3-3l2.293,2.293l1.414-1.414
	l-2.237-2.237L16,19.174l4.53,3.882l-2.237,2.237l1.414,1.414L22,24.414l3,3L28.414,24z M6.414,24L8,22.414L8.586,23L7,24.586
	L6.414,24z M9,10.54V8h2.54l3.143,3.667l-1.85,2.159L9,10.54z M20.46,8H23v2.54L10.053,21.638l-0.69-0.69L20.46,8z M18.95,16.645
	l3.688,4.302l-0.69,0.69l-4.411-3.781L18.95,16.645z M25,24.586L23.414,23L24,22.414L25.586,24L25,24.586z"
              />
            </svg>{" "}
            No Battle Multi go play
          </p>
        )}
      </div>
    </div>
  );
}

export default History;
