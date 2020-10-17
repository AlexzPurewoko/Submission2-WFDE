import Fragment from "../../base/Fragment";

class FavoriteFragment extends Fragment {
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

customElements.define("favorite-fragment", FavoriteFragment);
export default FavoriteFragment;