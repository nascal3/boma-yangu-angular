import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {DataTableComponent} from './data-table/data-table.component';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {UsersService} from '../../services/users/users.service';
import {debounceTime, Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    DataTableComponent,
    MatFormFieldModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  private userService = inject(UsersService);
  private router = inject(Router)
  form!: FormGroup
  filterChangeSubscription!: Subscription | undefined



  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    })

    this.filterChangeSubscription = this.form.get('search')?.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        this.userService.searchUser(value)
      })
  }

  async logout() {
    this.authService.logout();
    await this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.filterChangeSubscription) {
      this.filterChangeSubscription.unsubscribe()
    }
  }

}
