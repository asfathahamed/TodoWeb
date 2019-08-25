import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TodoComponent } from "./todo.component";

describe("TodoComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TodoComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodoApp-Web'`, () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("TodoApp-Web");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(TodoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to TodoApp-Web!"
    );
  });
});
