import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { user } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: user | null = null;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.profile().subscribe((data) => {
      this.user = data;
    });
  }
}
