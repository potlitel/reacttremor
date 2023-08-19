"use client";

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import KpiCardGrid from "./KpiCardGrid";
import ChartView from "./ChartView";
import SalesPeopleTable from "./SalesPeopleTable";

export default function DashboardExample() {
  return (
    <main className="px-12 py-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <KpiCardGrid />
            <div className="mt-6">
              {/* <Card>
                <div className="h-80" />
              </Card> */}
              <ChartView />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              {/* <Card>
                <div className="h-96" />
              </Card> */}
              {/* <SalesPeopleTable /> */}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
