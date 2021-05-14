import debounce from "@/helper/debounce";

export default function directive(el, binding) {
	if (binding.value !== binding.oldValue) {
		// change debounce only if interval has changed
		el.oninput = debounce(evt => {
			el.dispatchEvent(new Event("debounce-change"));
		}, parseInt(binding.value) || 500);
	}
}