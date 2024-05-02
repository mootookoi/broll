import React from "react";
import { Composition } from "remotion";

import * as schema from "@/lib/schema";

import {
  YouTubeVideoCardComposition,
  YouTubeVideoCardCompositionSchema,
} from "./youtube-video-card-composition";

export function Root() {
  return (
    <>
      <Composition
        id={YouTubeVideoCardComposition.name}
        component={YouTubeVideoCardComposition}
        schema={YouTubeVideoCardCompositionSchema}
        defaultProps={{
          videoDetails: schema.defaultVideoDetails,
        }}
        durationInFrames={60}
        fps={30}
        width={600}
        height={600}
      />
    </>
  );
}
