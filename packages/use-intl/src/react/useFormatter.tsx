import { useMemo } from "react";
import createFormatter from "../core/createFormatter";
import useIntlContext from "./useIntlContext";

export default function useFormatter() {
	const {
		formats,
		locale: routingLocale,
		formatingLocales,
		now: globalNow,
		onError,
		timeZone,
	} = useIntlContext();

	const locale = formatingLocales?.[routingLocale] ?? routingLocale;

	return useMemo(
		() =>
			createFormatter({
				formats,
				locale,
				now: globalNow,
				onError,
				timeZone,
			}),
		[formats, globalNow, locale, onError, timeZone]
	);
}
