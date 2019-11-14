import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService }                                                                       from '../../services/modal/modal.service';
import { CustomModalComponent }                                                               from './partials/custom-modal/custom-modal.component';

@Component({
  selector: 'ae-modal',
  templateUrl: './ae-modal.component.html',
  styleUrls: ['./ae-modal.component.scss']
})
export class AeModalComponent implements OnInit {
  @ViewChild('modalContent', {static: false, read: ViewContainerRef}) public modalContentContainer: ViewContainerRef;

  public currentModal: any[] = [];

  constructor(private modal: ModalService,
              private resolver: ComponentFactoryResolver) { }

  public ngOnInit() {
    this.modal.getModal().subscribe((modal) => {
      this.createNewModal(modal);
    });
    this.modal.getResponse().subscribe(() => {
      this.removeLast();
    });
  }

  public backDropClick() {
    this.modal.close({message: 'backdrop', entity: null})
  }

  private createNewModal(modal: { component: any, params: any, size: any }) {
    let inputProviders = [];
    if (modal.params) {
      inputProviders = Object.keys(modal.params).map((inputName) => {
        return {provide: inputName, useValue: modal.params[inputName]};
      });
    }

    // Creamos el inyector que queremos pasarle al modal
    let injector = Injector.create({providers: inputProviders, parent: this.modalContentContainer.parentInjector});

    // Creamos la Factory del contenido del modal que queremos crear
    let factory = this.resolver.resolveComponentFactory(CustomModalComponent);

    // Creamos el componente que vamos a iyectar con la factoria y el inyector
    let component = factory.create(injector);

    // Insertamos el componente en el div modalContentContainer
    this.modalContentContainer.insert(component.hostView);
    this.currentModal.push(component);

    // Añadimos el tamaño al modal creado
    let lastModal = this.currentModal[this.currentModal.length - 1];
    lastModal.location.nativeElement.childNodes[0].className += ' ' + modal.size;
    this.addNewOpacity();
  }

  private removeLast() {
    try {
      this.currentModal[this.currentModal.length - 1].destroy();
    } catch (e) {
      console.log('Error while destroying the modal');
    }
    this.currentModal.pop();
    this.addNewOpacity();
  }

  private addNewOpacity() {
    if (!this.currentModal.length) return;
    for (let component of this.currentModal) {
      component.location.nativeElement.className = component.location.nativeElement.className.replace(' opacity', '');
      component.location.nativeElement.className = component.location.nativeElement.className + ' opacity';
    }
    this.currentModal[this.currentModal.length - 1].location.nativeElement.className = this.currentModal[this.currentModal.length - 1].location.nativeElement.className.replace(' opacity', '');
  }

}
