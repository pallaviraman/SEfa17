import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {
  public q1:String = "When will I get my payout?";
  public q2:String = "How do I edit or change my payout method?";
  public q3:String = "If I specify that my listing is safe or suitable for children, what should I know?";
  public q4:String = "How do I share my House Rules with guests?";
  public q5:String = "What is occupancy tax? Do I need to collect or pay it?";
  public q6:String = "Should I expect to receive a tax form from Gator housing?";
  public q7:String = "What is Gator housing's Extenuating Circumstances Policy?";
  public q8:String = " Still need help?";
  public a1:String = "Gator housing typically releases your payout about 24 hours after your guest’s scheduled check-in time. The time it takes for the funds to arrive in your account depends on your payout method.If your guest is staying for 28 or more nights, payouts for that reservation are released monthly.If you're a new host, we may hold your payouts for 30 days after your first reservation is confirmed. If your first reservation is more than 30 days away, your payout will be released 24 hours after your guest's scheduled check-in. This will apply to any payouts scheduled to be released during those 30 days.";
  public a2:String = "When a host payout is ready to be paid to you, it will be released to your payout method for processing. You can check the status of your payouts at any time from your Transaction History.";
  public a3:String = "Gator housing has partnered with Safe Kids Worldwide, a global organization dedicated to preventing child injuries. Safe Kids Worldwide suggests adding the following amenities to make your home infant- and child-friendly: A working smoke and CO detector on every floor, and in all sleeping areas. A portable crib with a firm fitting crib sheet. Be sure to place away from windows and blinds in room. Removable safety gates for stairs and, if you have a pool, a gate around it. Cordless window blinds. Keep all household cleaning products, liquid laundry packets, medicine, and chemicals securely stored and out of reach. Mounted flat panel TVs to avoid tipovers. Be sure to place heavier, box-style TVs on low, stable pieces of furniture. Use brackets, braces, or walls traps to secure unstable and top heavy furniture to avoid tip overs.Water heater set at no higher than 120 degrees Fahrenheit to avoid scalds.";
  public a4:String = "Hosts share their House Rules to set expectations with their guests, like limits on smoking, areas beyond the listing space that are off-limits, and permission to have visitors.House Rules appear on your listing page, and guests must review and agree to them before requesting a reservation. They’re also sent directly to a guest once they’ve a confirmed reservation.";
  public a5:String = "Occupancy tax is a tax on the rental of rooms that your state or locality may require. In many places this is known as an occupancy tax, but may also be known as a lodging tax, a room tax, a sales tax, a tourist tax, or a hotel tax.As an Gator housing host, if you determine that you need to cAs an Gator housing host, if you determine that you need to collect occupancy tax, you can collect Occupancy Taxes by asking your guests to pay it in person or through the Resolution Center after they check in. In each case, it's important that guests are informed of the exact tax amount prior to booking. If you choose to collect Occupancy Taxes in person, please note that it should be collected only upon arrival and that we’re unable to assist with collection.";
  public a6:String = "Depending on your account status, the taxpayer information you've submitted to Gator housing, and other factors, you may receive a tax form from Gator housing.As always, we encourage you to consult a tax professional for assistance reporting your income. If you think you've submitted the wrong information, you can make changes to taxpayer information you've already submitted.";
  public a7:String = "Gator housing empowers hosts to set and manage their cancellation policies. If a host or guest needs to cancel a reservation, it’s their responsibility to cancel as soon as possible. At times, certain circumstances outside of a host or guest’s control can impact their ability to meet the terms of a reservation.In rare instances, if Gator housing determines that a Guest’s reason for cancellation falls within Gator housing Extenuating Circumstances Policy, Gator housing may override the Host's cancellation policy (ex: flexible, moderate, strict) and make refund decisions. If Gator housing determines that a Host’s reason for cancellation falls within Gator housing's Extenuating Circumstances policy, Gator housing may waive the host cancellation penalties outlined in Gator housing’s Terms of Service and Gator housing ’s Payments Terms of Service.";
  constructor() { }

  ngOnInit() {
  }

}

