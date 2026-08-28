import React from "react";
import ServicePage from "../components/services/ServicePage";
import { getServiceBySlug } from "../data/services";

const service = getServiceBySlug("ac-service-coimbatore");

export default function ACService() {
  return <ServicePage service={service} />;
}
