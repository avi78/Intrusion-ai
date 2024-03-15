"use client";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {};

const HomePage = (props: Props) => {
  return(
    <div>
      <Webcam />
    </div>
  );
};

export default HomePage;
