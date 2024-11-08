import { Section } from "../../common/Section";
import { Description, StyledMain } from "./styled";
import { CertyficateLink, PersonalHomepage } from "../../common/Links";
import { List } from "../../common/List";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const Main = () => (
	<StyledMain>
		<Section
			isMain
			name="O mnie"
			content={[
				<Description>
					Od 1,5 roku pasjonuję się programowaniem, a <strong>frontend</strong> daje mi największe możliwości realizacji moich pomysłów oraz wykorzystania kreatywności. W&nbsp;trakcie procesu przebranżowienia odkryłam, że praca z <strong>JavaScriptem</strong> i&nbsp;<strong>Reactem</strong> daje mi ogromną satysfakcję. Brak możliwości rozwoju w&nbsp;poprzedniej pracy skłonił mnie do zmiany branży: nie lubię tkwić w&nbsp;miejscu, natomiast w każdym wyzwaniu widzę możliwości rozwoju. Każdy nowy projekt jest dla mnie okazją do nauki i doskonalenia umiejętności. Uważam, że nie ma problemu, którego nie da się rozwiązać – to podejście chcę wykorzystywać, projektując <strong>responsywne strony internetowe</strong> i <strong>nowoczesne aplikacje webowe</strong>. Moim celem jest zdobycie doświadczenia jako <strong>React Frontend Developer</strong> w dynamicznym zespole, gdzie będę mogła połączyć swoje <strong>umiejętności analityczne</strong> z&nbsp;<strong>kreatywnością</strong>, tworząc rozwiązania, które będą funkcjonalne i&nbsp;estetyczne.
				</Description>,
			]}
			showIcons={false}
		/>
		<Section
			isMain
			name="Doświadczenie"
			content={[
				<div>
					<Description>
						28.05.2007 r. - 09.06.2023 r. - Funkcjonariusz Straży Granicznej,
						ostatnie zajmowane stanowisko: Specjalista Zespołu Kontroli Ruchu
						Granicznego Grupy Granicznej Placówki SG w Dołhobyczowie:
					</Description>
					<List
						items={[
							"zarządzanie i analiza dokumentacji oraz raportów, wyszukiwanie błędów z odprawy osób oraz pojazdów, co wymagało wysokiej dokładności i skrupulatności",
							"rozwiązywanie problemów w szybko zmieniającym się środowisku, co wymagało umiejętności logicznego myślenia i skutecznego podejmowania decyzji",
							"współpraca w zespole, organizacja działań oraz zarządzanie czasem i priorytetami w celu osiągnięcia wyznaczonych celów",
							"współpraca z innymi służbami i instytucjami",
						]}
						isMain
						customIcon={faPlay}
					/>
				</div>,
			]}
		/>
		<Section
			isMain
			name="Wykształcenie"
			content={[
				"06.11.2010 r. - Wyższa Szkoła Ekonomii i Innowacji w Lublinie - Wydział Administracji - magister",
			]}
		/>
		<Section
			isMain
			name="Kursy"
			content={[
				<span>
					01.10.2024 r. - Kurs Frontend Developer od podstaw -{" "}
					<CertyficateLink />
				</span>,
			]}
		/>
		<Section
			isMain
			name="Portfolio"
			content={[
				<Description>
					Zapraszam do zapoznania się z <PersonalHomepage />
				</Description>,
			]}
			showIcons={false}
		/>
	</StyledMain>
);
