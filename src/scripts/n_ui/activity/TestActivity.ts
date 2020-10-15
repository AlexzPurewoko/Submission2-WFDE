import BaseActivity from "./base/BaseActivity";

class TestActivity extends BaseActivity {
    onCreated(params: any[]): void {
        this.innerHTML = '<p>Test Page</p>';
    }
    onPaused(): void {
        
    }
    onResumed(): void {
        
    }
    onDestroy(): void {
        
    }
    onResizeEvent(event: Event): void {
        
    }
    onScrollEvent(event: Event): void {
        
    }

}
customElements.define("test-activity", TestActivity);