import { Module } from "vuex";
import { GloablDataProps } from "./index";
import Chart, { ChartOptionsProps } from "@/lib/chart/index";
export interface ChartStoreProps {
	chart: ChartOptionsProps | null;
}
const chart: Module<ChartStoreProps, GloablDataProps> = {
	namespaced: true,
	state: {
		chart: null,
	},
	getters: {},
	mutations: {
		setChart(state, chart: ChartOptionsProps) {
			state.chart = chart;
		},
	},
};

export default chart;