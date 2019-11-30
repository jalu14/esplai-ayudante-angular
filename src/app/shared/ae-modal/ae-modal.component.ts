import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService }               from '../../services/modal/modal.service';
import { CustomModalComponent }       from './modals/custom-modal/custom-modal.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { ModalTypeConfiguration }     from './modal-type.configuration';
import { throwError }                 from 'rxjs';

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
    this.modal.getModal().subscribe(({modal, type}) => {
      this.createModal(modal, type);
    });
    this.modal.getResponse().subscribe(() => {
      this.removeLast();
    });
  }

  public backDropClick() {
    this.modal.close({message: 'backdrop', entity: null})
  }

  private createModal(modal: { component: any, params: any, size: any }, type: string) {
    let inputProviders = [];
    if (modal.params) {
      inputProviders = Object.keys(modal.params).map((inputName) => {
        return {provide: inputName, useValue: modal.params[inputName]};
      });
    }

    // Creamos el inyector que queremos pasarle al modal
    let injector = Injector.create({providers: inputProviders, parent: this.modalContentContainer.parentInjector});

    // Creamos la Factory del contenido del modal que queremos crear
    const modalComponent = ModalTypeConfiguration[type];
    if (!modalComponent) {
      console.error('Modal component was not found or configured');
      return;
    }
    let factory = this.resolver.resolveComponentFactory(modalComponent);

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
