import React from "react";
import ServicePage from "../components/services/ServicePage";
import { getServiceBySlug } from "../data/services";

const service = getServiceBySlug("tv-repair-coimbatore");

export default function TVRepair() {
  return <ServicePage service={service} />;
}
