import React from "react";
import useActorRequest from "../../hooks/useRequestActor";
import { Grid } from "@mui/material";
import { DEFAULT_ACTOR_IMAGE } from "../../constants/constants";
import { Link } from "react-router-dom";
import './actorItem.css';

const GridStyle = {
  backgroundColor: 'black',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  maxHeight: '400px',
  '&::-webkit-scrollbar': { display: 'none' },
  marginBottom: '50px'
};

function ActorComponent() {
  const { actorData } = useActorRequest();

  const processedActorData = [];

  actorData.forEach((actor) => {
    const existingActor = processedActorData.find((a) => a.person.id === actor.person.id);

    if (existingActor) {
      if (existingActor.characterNames) {
        existingActor.characterNames.push(actor.character.name);
      } else {
        existingActor.characterNames = [actor.character.name];
      }
    } else {
      processedActorData.push({
        person: actor.person,
        characterNames: [actor.character.name],
      });
    }
  });

  return (
    <>
    {actorData.length > 0 ? (
      <> 
      <div className="Tag">
      <h1>Starring</h1>
    </div>
    <Grid container spacing={1} sx={GridStyle}>
      {processedActorData.map((actor) => (
        <Grid item xs={4} key={actor.person.id}>
          <div className="actor_card">
            <div className="actor_image">
              <img
                src={actor.person.image ? actor.person.image.medium || DEFAULT_ACTOR_IMAGE : DEFAULT_ACTOR_IMAGE}
                alt={actor.person.name}
              />
            </div>
            <div className="actor_info">
              <span>{actor.person.name}</span>
              <span className="As">{actor.characterNames?.join(", ")}</span>
            </div>
            <Link className='actor_btn'
           to={`/actor/${actor.person.id}`}
            >
            Show More
        </Link>
          </div>
        </Grid>
      ))}
    </Grid>
    </>
    ) : <> </>}
    </>
  );
}

export default ActorComponent;