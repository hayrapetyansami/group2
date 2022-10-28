"use strict";

import UI from "./modules/ui";
import POST from "./modules/postMethod";
import GET from "./modules/getMethod";
import PATCH from "./modules/patchMethod";
import DELETE from "./modules/deleteMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/filter";

const url = "http://localhost:8888/todos";

UI.start();

const { form, screenInput} = UI;
POST(form, screenInput, url);

async function engine() {
	await GET(UI, url);
	PATCH(
		document.querySelectorAll(".editBtn"),
		document.querySelectorAll(".saveBtn"),
		document.querySelectorAll(".listsBlockItemContent"),
		url
	);
	DELETE(
		document.querySelectorAll(".removeBtn"),
		url
	);
	COMPLETE(
		url, 
		document.querySelectorAll(".buttons input"), 
		document.querySelectorAll(".listsBlockItemContent")
	);
	FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI
	)
}


engine();