import Fragment from "./base/Fragment";

class TestFragment extends Fragment {


    protected onRenderPage(): void {
        this.render();
    }
    protected onSaveState(): void {
        
    }
    protected onDestroy(): void {
        
    }
    protected titleFragment(): string {
        return "TestFragment";
    }

    private render() {
        this.innerHTML = `
        
        `;
    }

}
customElements.define("test-fragment", TestFragment);
export default TestFragment;