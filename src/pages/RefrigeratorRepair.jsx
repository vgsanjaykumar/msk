import React from "react";
import ServicePage from "../components/services/ServicePage";
import { getServiceBySlug } from "../data/services";

const service = getServiceBySlug("refrigerator-repair-coimbatore");

export default function RefrigeratorRepair() {
  return <ServicePage service={service} />;
}
