import React from "react";
import ServicePage from "../components/services/ServicePage";
import { getServiceBySlug } from "../data/services";

const service = getServiceBySlug("washing-machine-repair-coimbatore");

export default function WashingMachineRepair() {
  return <ServicePage service={service} />;
}
