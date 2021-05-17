import throttle from "@/helper/throttle";

export default function directive(el, binding) {
	if (binding.value !== binding.oldValue) {
		el.oninput = throttle((evt) => {
			el.dispatchEvent(new Event("throttle-change"));
		}, parseInt(binding.value) || 500);
	}
}
