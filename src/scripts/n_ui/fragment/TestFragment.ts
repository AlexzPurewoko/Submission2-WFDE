import Fragment from "./base/Fragment";

class TestFragment extends Fragment {

    onRenderPage(): void {
        this.render();
    }
    onSaveState(): void {
        
    }
    onDestroy(): void {
        
    }
    titleFragment(): string {
        return "TestFragment";
    }

    onReceiveMessage(key: string, value: any): void {
        
    }

    private render() {
        this.innerHTML = `
            
        `;
    }

}
customElements.define("test-fragment", TestFragment);
export default TestFragment;