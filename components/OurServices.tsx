"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { JackInTheBox } from "react-awesome-reveal";

interface Props {
  tagId: string;
}

const OurServices = ({ tagId }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="py-5 font-poppins bg-[#D6F9C6] h-fit w-screen glasss"
      id={tagId}
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-green-900 px-2 border-green-900 z-10 mt-2 text-center leading-10 pt-16">
        Services
      </h2>
      <p className="text-sm px-5 py-2 md:px-40 lg:px-40 lg:text-xl font-poppins">
        Are you a pastoralist or a farmer? Then you are in the right place.
        <br /> We aim to bring you a digital platform that promotes the peaceful
        coexistence between <br />
        pastoralists and farmers by nullifying resource conflict through the
        following features:
      </p>

      <div className="pt-3 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-fit">
        <Card
          iconPath={"real-time-pasture-updates-icon.svg"}
          title="Real Time Pasture Updates"
        >
          {mounted && (
            <JackInTheBox>
              <p>
                The app provides real-time updates on pasture availability by
                integrating data from satellite imagery and users can view interactive
                enable users to make informed decisions regarding livestock grazing
                locations, rotational grazing practices, and sustainable land
                maps showing current pasture conditions.
              </p>
            </JackInTheBox>
          )}
        </Card>

        <Card iconPath={"weather-forecast-icon.svg"} title="Weather Forecasts">
          {mounted && (
            <JackInTheBox>
              <p>
                Weather forecasting provides users with
                accurate and up-to-date weather information for their specific
                geographical locations. Users can access hourly, daily, and weekly
                weather forecasts, including temperature, humidity, precipitation
                chances, wind speed, among other relevant data points.
              </p>
            </JackInTheBox>
          )}
        </Card>

        <Card
          iconPath={"track-animal-location-icon.svg"}
          title="Track Animal Location"
        >
          {mounted && (
            <JackInTheBox>
              <p>
                GPS tracking enables users to monitor and track the
                movement of their animals in real-time using GPS-enabled devices such
                as smartphones or dedicated GPS trackers attached to animals so as to
                improve grazing efficiency, preventing livestock loss or theft, and
                optimizing resource utilization based on animal movements and
                behavior.
              </p>
            </JackInTheBox>
          )}
        </Card>

        <Card iconPath={"geoFencing.png"} title="Geofencing">
          {mounted && (
            <JackInTheBox>
              <p>
                Our app empowers both farmers and pastoralists. Farmers can create virtual fences to receive alerts if cattle enter their land, ensuring crop protection and peace of mind. Pastoralists can view designated farm boundaries to plan grazing routes that avoid conflict and promote responsible land use, fostering a more harmonious relationship between both communities.
              </p>
            </JackInTheBox>
          )}
        </Card>
      </div>
    </section>
  );
};

export default OurServices;

