import Fragment from "../../base/Fragment"

class AboutFragment extends Fragment {
    onRenderPage(): void {
        throw new Error("Method not implemented.");
    }
    onSaveState(): void {
        throw new Error("Method not implemented.");
    }
    onDestroy(): void {
        throw new Error("Method not implemented.");
    }
    titleFragment(): string {
        throw new Error("Method not implemented.");
    }
    onReceiveMessage(key: string, value: any): void {
        throw new Error("Method not implemented.");
    }

}

customElements.define("about-fragment", AboutFragment);
export default AboutFragment;