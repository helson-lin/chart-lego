<template>
	<div class="decorator-list">
		<div
			class="decorator"
			draggable="true"
			v-for="decorator in decoratorList"
			:key="decorator.uid"
			@click="addDecorator(decorator)"
			@dragstart="drag"
		>
			<img
				:src="decorator.imgUrl"
				:alt="decorator.name"
				:title="decorator.name"
			/>
			<!-- {{ decorator.name }}={{ decorator.imgUrl }} -->
		</div>
	</div>
</template>
<script lang="ts" setup>
import lodash from "lodash";
import { DecoratorOptionProps } from "@/types/decorator";
import { v4 as uuidv4 } from "uuid";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { getComponetsName } from "../decorator/index";
const decoratorList = ref<DecoratorOptionProps[]>([]);
const store = useStore();
const addDecorator = (decorator: DecoratorOptionProps) => {
	const addDecorator = lodash.cloneDeep(decorator);
	addDecorator.uid = uuidv4();
	store.commit("editor/addComponent", addDecorator);
};
const drag = (e: DragEvent) => {
	const el = e.target;
	(el as HTMLElement).className += " draging";
};
onMounted(() => {
	decoratorList.value = getComponetsName();
});
</script>
<style lang="scss" scoped>
.decorator-list {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px 20px;
	box-sizing: border-box;
	justify-items: center;
	align-content: center;
	overflow-y: scroll;
	user-select: none;
	text-align: center;
	@include scrollbar(10px, 15px);
	.decorator {
		width: 100%;
		height: 40px;
		margin-bottom: 20px;
		font-size: 18px;
		//border: 1px solid #ccc;
		font-weight: 400;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
			backdrop-filter: blur(12px);
			box-shadow: $shadow-shallow;
		}
		&.draging {
			cursor: grabbing;
		}
	}
}
</style>
