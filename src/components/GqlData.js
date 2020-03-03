import React, { Fragment } from "react";
import gql from "graphql-tag";
import "./styles/style.css";
import { useQuery } from "@apollo/react-hooks";

const GET_LAUNCHES = gql`
  query {
    launches {
      mission_id
      mission_name
      launch_year
    }
  }
`;

const GqlData = () => {

  const { error, loading, data } = useQuery(GET_LAUNCHES);

  if (error) console.log(error);
  if (loading) return <h4>loading</h4>;
  return data.launches.map(({ mission_name, mission_id, launch_year }) => (
    <Fragment>
      <div className="dataWrapper"key='{mission_id}'>
        <h4 className="data">
     {mission_name}/{launch_year}
        </h4>
      </div>
    </Fragment>
  ));
};

export default GqlData;
